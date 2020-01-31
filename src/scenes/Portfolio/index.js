//@flow
import React, {useState, useEffect, useRef} from 'react';
import {useTranslation} from 'react-i18next';
import {useTheme, useGlobalState, useDispatch} from '../../store';

//Import COMPONENTS
import {Button, ScrollBox, SideMenu, TextBackline} from '../../components';
import ProjectBox from './components/ProjectBox';
import ProjectDetails from './components/ProjectDetails';

//Import CONSTANTS
import {TAGS, PROJECTS} from './constants';

//Import UTILS/HOOKS
import {useSideMenuWidth} from './utils';

//Import STYLES
import './styles.css';
import 'react-image-gallery/styles/css/image-gallery.css';

type Props = {
  className?: string,
};

const PortfolioPage = ({className}: Props) => {
  const classNames = ['page-content page-portfolio', className].join(' ');
  const {primaryColor, secondaryColor, textColor} = useTheme().colors.portfolio;
  const {pageTransition} = useTheme().variables;
  const sideMenuWIdth = useSideMenuWidth();
  const {t} = useTranslation('portfolio');
  const {projectMenuState} = useGlobalState();
  const {openProjectMenu, closeProjectMenu} = useDispatch();

  const [isRenderState, setIsRenderState] = useState<boolean>(false);
  const [toggledTagsState, setToggledTagsState] = useState<
    Array<{|state: boolean, tag: string|}>,
  >(TAGS.map(tag => ({state: false, tag: tag})));
  const [projectsFilterState, setProjectsFilterState] = useState<Set<number>>(
    new Set([]),
  );
  const [filterMenuState, setFilterMenuState] = useState<{
    state: boolean,
    offset: number,
  }>({state: false, offset: 0});

  const contentContainerRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRenderState(true);
    }, pageTransition);

    return () => {
      clearTimeout(timeout);
    };
  }, [pageTransition]);

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
    openProjectMenu(PROJECTS[index]);
  };

  const handleChangeMenuState = state => {
    !state && closeProjectMenu();
  };

  const handleToggleFilterBtn = () => {
    let filterMenuOffset = 0;

    if (!filterMenuState.state && contentContainerRef.current) {
      filterMenuOffset = contentContainerRef.current.scrollTop;
    }

    setFilterMenuState(prevState => ({
      ...prevState,
      state: !prevState.state,
      offset: filterMenuOffset,
    }));
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
        ...(projectMenuState.isActive
          ? {
              transform: `translateX(${
                typeof sideMenuWIdth === 'string'
                  ? `-${sideMenuWIdth}`
                  : `${sideMenuWIdth * -1}px`
              })`,
              zIndex: 1000,
            }
          : {}),
      }}
      className={classNames}>
      <SideMenu
        style={{
          mainContainer: {
            width: sideMenuWIdth,
            backgroundColor: primaryColor,
          },
        }}
        overlay
        isActive={projectMenuState.isActive}
        onStateChange={handleChangeMenuState}>
        <ProjectDetails data={projectMenuState.data} />
      </SideMenu>

      <div className="page-portfolio__container">
        {isRenderState && (
          <div
            ref={contentContainerRef}
            className={`page-content__container page-portfolio__container-inner ${
              filterMenuState.state ? 'page-portfolio_isActive_filters' : ''
            }`}>
            <div className="page-portfolio__box">
              <div className="header header_type_h1 header_tt_uppercase header_fw_bold animated fadeIn">
                <span style={{color: secondaryColor}}>My</span>
                <span style={{marginRight: 12}}>.</span>
                <span>Portfolio</span>
              </div>

              <TextBackline
                textWrapperClassName="animated bounceInRight"
                className="paragraph"
                options={{text: {backgroundColor: primaryColor}}}>
                <span
                  className="text-common text-common_tt_uppercase"
                  style={{
                    color: secondaryColor,
                  }}>
                  {t('Header')}
                </span>
              </TextBackline>

              <div className="paragraph">
                <div className="text-common animated bounceInLeft">
                  {t('Description')}
                </div>
              </div>

              <div className="page-portfolio__content">
                <div className="page-portfolio__tags-filter">
                  <Button
                    className="page-portfolio__tags-filter-btn"
                    text="Filters"
                    onClick={handleToggleFilterBtn}
                    activeStyle={{
                      backgroundColor: secondaryColor,
                      color: textColor,
                      borderColor: secondaryColor,
                    }}
                  />

                  <div
                    style={{
                      backgroundColor: primaryColor,
                      borderColor: secondaryColor,
                      top: filterMenuState.state
                        ? filterMenuState.offset
                        : '-100%',
                    }}
                    className={`page-portfolio__tags-filter-wrapper`}>
                    <div className="paragraph page-portfolio__tag-header">
                      <span className="text-common text-common_fz_medium text-common_tt_uppercase">
                        Filters:
                      </span>
                    </div>

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
                          animationDelay: `${index * 100}ms`,
                        }}
                        activeStyle={{
                          backgroundColor: secondaryColor,
                          color: textColor,
                          borderColor: secondaryColor,
                        }}
                      />
                    ))}

                    <Button
                      className="page-portfolio__tags-filter-btn"
                      text="Close"
                      onClick={handleToggleFilterBtn}
                      style={{
                        borderColor: secondaryColor,
                        color: secondaryColor,
                      }}
                      activeStyle={{
                        backgroundColor: secondaryColor,
                        color: textColor,
                      }}
                    />
                  </div>
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
