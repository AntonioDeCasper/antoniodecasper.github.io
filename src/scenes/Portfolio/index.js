//@flow
import React, {useState, useEffect, useContext} from 'react';
import {useTranslation} from 'react-i18next';
import {ThemeContext} from '../../store';

//Import COMPONENTS
import {Button, ScrollBox, SideMenu} from '../../components';
import ProjectBox from './components/ProjectBox';
import ProjectDetails from './components/ProjectDetails';

//Import CONSTANTS
import {TAGS, PROJECTS, SIDE_MENU_WIDTH} from './constants';

//Import STYLES
import './styles.css';
import 'react-image-gallery/styles/css/image-gallery.css';

type Props = {
  className?: string,
};

const PortfolioPage = ({className}: Props) => {
  const classNames = ['page-content page-portfolio', className].join(' ');
  const {primaryColor, secondaryColor, textColor} = useContext(
    ThemeContext,
  ).colors.portfolio;
  const {pageTransition} = useContext(ThemeContext).variables;
  const {t} = useTranslation('portfolio');

  const [isRenderState, setIsRenderState] = useState<boolean>(false);
  const [toggledTagsState, setToggledTagsState] = useState<
    Array<{|state: boolean, tag: string|}>,
  >(TAGS.map(tag => ({state: false, tag: tag})));
  const [projectsFilterState, setProjectsFilterState] = useState<Set<number>>(
    new Set([]),
  );
  const [sideMenuState, setSideMenuState] = useState<{
    state: boolean,
    data: ?{[string]: any},
  }>({state: false, data: null});

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRenderState(true);
    }, pageTransition);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (PROJECTS.length > 0) {
      let filteredProjectsList = new Set();
      const toggledTagsList = toggledTagsState.filter(
        toggledTag => toggledTag.state,
      );

      PROJECTS.map((project, index) => {
        const projectTagsSet = new Set(project.tags);
        const isTagExist = toggledTagsList.every(toggledTag =>
          projectTagsSet.has(toggledTag.tag),
        );

        isTagExist && filteredProjectsList.add(index);
      });

      setProjectsFilterState(filteredProjectsList);
    }
  }, [toggledTagsState]);

  const handleToggle = (index, state) => {
    let newTagsStates = [...toggledTagsState];
    newTagsStates[index].state = state;
    setToggledTagsState(newTagsStates);
  };

  const handleProjectClick = (config, index) => {
    // console.log('handleProjectClick: ', config);
    setSideMenuState({state: true, data: PROJECTS[index]});
  };

  const handleChangeMenuState = state => {
    !state && setSideMenuState(prevState => ({...prevState, state}));
  };

  console.log('%cRender Portfolio Page', 'color: green');

  const styles = {
    pageContainer: {
      backgroundColor: primaryColor,
      color: textColor,
    },
    socialLink: {
      color: secondaryColor,
    },
    socialLinkFacebook: {
      color: '#4267b2',
    },
    socialLinkLinkedIn: {
      color: '#3977b5',
    },
  };

  return (
    <div
      style={{
        ...styles.pageContainer,
        ...(sideMenuState.state
          ? {
              transform: `translateX(${
                typeof SIDE_MENU_WIDTH === 'string'
                  ? `-${SIDE_MENU_WIDTH}`
                  : `${SIDE_MENU_WIDTH * -1}px`
              })`,
              zIndex: 1000,
            }
          : {}),
      }}
      className={classNames}>
      <SideMenu
        style={{
          mainContainer: {
            width: SIDE_MENU_WIDTH,
            backgroundColor: primaryColor,
          },
        }}
        isActive={sideMenuState.state}
        onStateChange={handleChangeMenuState}>
        <ProjectDetails data={sideMenuState.data} />
      </SideMenu>

      <div className="page-portfolio__container">
        {isRenderState && (
          <div className="page-content__container page-portfolio__container-inner">
            <div className="page-portfolio__box">
              <div className="header header_type_h1 header_tt_uppercase header_fw_bold animated fadeIn">
                <span style={{color: secondaryColor}}>My</span>
                <span style={{marginRight: 12}}>.</span>
                <span>Portfolio</span>
              </div>

              <div className="paragraph text-backline page-portfolio__header2">
                <div
                  style={{
                    background: primaryColor,
                  }}
                  className="text-common text-common_tt_uppercase text-backline__text-box animated bounceInRight">
                  <span style={{color: secondaryColor}}>{t('Header')}</span>
                </div>
                <div className="text-backline__line"></div>
              </div>

              <div className="paragraph">
                <div className="text-common animated bounceInLeft">
                  {t('Description')}
                </div>
              </div>

              <div className="page-portfolio__content">
                <div className="page-portfolio__tags-filter">
                  {TAGS.map((tag, index) => (
                    <Button
                      isToggleable
                      isToggled={toggledTagsState[index].state}
                      onToggle={state => handleToggle(index, state)}
                      className={`page-portfolio__tag-selector animated flipInX`}
                      key={index}
                      text={tag}
                      theme="tag"
                      style={{
                        marginLeft: index === 0 ? 0 : 10,
                        animationDelay: `${index * 100}ms`,
                      }}
                      activeStyle={{
                        backgroundColor: secondaryColor,
                        color: textColor,
                        borderColor: secondaryColor,
                      }}
                    />
                  ))}
                </div>

                <ScrollBox
                  isBottomPadding={projectsFilterState.size !== 0}
                  className="page-portfolio__projects">
                  {projectsFilterState.size !== 0 ? (
                    PROJECTS.map((project, index) => (
                      <ProjectBox
                        key={project.index}
                        config={{
                          name: project.name,
                          tags: project.tags,
                          cover: project.cover,
                        }}
                        className="page-portfolio__project"
                        isActive={projectsFilterState.has(index)}
                        onClick={config => handleProjectClick(config, index)}
                      />
                    ))
                  ) : (
                    <div className="header_type_h2 header_tt_uppercase header_fw_bold page-portfolio__no-match">
                      {t('NoMatch')}
                    </div>
                  )}
                </ScrollBox>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
