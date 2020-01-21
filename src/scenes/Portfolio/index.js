//@flow
import React, {useState, useEffect, useContext} from 'react';
import ImageGallery from 'react-image-gallery';
import {ThemeContext} from '../../store';

//Import COMPONENTS
import {Button, ScrollBox, SideMenu} from '../../components';
import ProjectBox from './components/ProjectBox';
import HeaderUbuntu from './components/HeaderUbuntu';

//Import UTILS
import {convertTagToIcon} from './utils';

//Import CONSTANTS
import {TAGS, PROJECTS, SIDE_MENU_WIDTH} from './constants';

//Import STYLES
import './styles.css';
import 'react-image-gallery/styles/css/image-gallery.css';

type Props = {
  className?: string,
};

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

const PortfolioPage = ({className}: Props) => {
  const classNames = ['page-content page-portfolio', className].join(' ');
  const {primaryColor, secondaryColor, textColor} = useContext(
    ThemeContext,
  ).colors.portfolio;
  const {pageTransition} = useContext(ThemeContext).variables;

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

  useEffect(() => {
    console.log('sideMenuState: ', sideMenuState);
  }, [sideMenuState]);

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
        <div className="page-portfolio__menu">
          <div className="page-portfolio__menu-content">
            <div className="paragraph">
              <div className="header header_type_h3 header_tt_uppercase header_fw_bold">
                <span style={{color: secondaryColor}}>Project</span>
                <span>:</span>
              </div>
              <div className="header header_type_h3 header_tt_uppercase header_fw_bold">
                {sideMenuState.data ? sideMenuState.data.name : 'Jonh Doe'}
              </div>
            </div>

            <div className="paragraph paragraph_paddings_large">
              <div className="page-portfolio__slider">
                <ImageGallery
                  items={
                    sideMenuState.data ? sideMenuState.data.gallery : images
                  }
                  lazyLoad={true}
                  useTranslate3D={false}
                  autoPlay={true}
                />

                <HeaderUbuntu
                  label={sideMenuState.data ? sideMenuState.data.name : ''}
                />
              </div>
            </div>

            <div className="paragraph text-backline page-portfolio__header2">
              <div
                style={{
                  background: primaryColor,
                }}
                className="header header_type_h4 header_tt_uppercase header_fw_medium text-backline__text-box">
                <span style={{color: textColor}}>About this project</span>
              </div>
              <div className="text-backline__line"></div>
            </div>

            <div className="paragraph paragraph_align_left">
              <div className="text-common">
                {sideMenuState.data ? sideMenuState.data.description : 'Empty'}
              </div>
            </div>
          </div>

          <div className="page-portfolio__menu-tags">
            {sideMenuState.data &&
              sideMenuState.data.tags.map((tag, index) => {
                const {icon, color} = convertTagToIcon(tag.toLowerCase());
                return (
                  <div
                    style={{backgroundColor: color}}
                    className="page-portfolio__menu-tag"
                    key={index}>
                    {icon}
                  </div>
                );
              })}
          </div>
        </div>
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
                  <span style={{color: secondaryColor}}>
                    Work is always in progress...
                  </span>
                </div>
                <div className="text-backline__line"></div>
              </div>

              <div className="paragraph">
                <div className="text-common animated bounceInLeft">
                  From &quot;Vanilla&quot; HTML5, CSS3, jQuery to modern
                  frameworks React.JS and React Native. Check out my latest
                  portfolio projects.
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

                <ScrollBox className="page-portfolio__projects">
                  {projectsFilterState.size !== 0 ? (
                    PROJECTS.map((project, index) => (
                      <ProjectBox
                        key={project.index}
                        config={{
                          name: project.name,
                          tags: project.tags,
                        }}
                        className="page-portfolio__project"
                        isActive={projectsFilterState.has(index)}
                        onClick={config => handleProjectClick(config, index)}
                      />
                    ))
                  ) : (
                    <div className="header_type_h2 header_tt_uppercase header_fw_bold page-portfolio__no-match">
                      No match
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
