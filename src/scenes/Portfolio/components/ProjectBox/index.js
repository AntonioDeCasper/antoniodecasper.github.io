//@flow
import React, {memo, useState} from 'react';

//Import COMPONENTS
import {HeaderUbuntu} from '../HeaderUbuntu';

//Import ICONS
import {GoArrowRight} from 'react-icons/go';

//Import UTILS
import {convertTagToIcon} from '../../utils';

// Import STYLES
import './styles.css';

type Props = {|
  className?: string,
  config: ConfigProps,
  isActive: boolean,
  onClick?: ConfigProps => void,
|};

type ConfigProps = {|name?: string, tags?: Array<string>, cover: ?string|};

export const ProjectBox = memo<Props>(
  ({className, config, isActive, onClick}) => {
    const classNames = [
      'project-box animated',
      className,
      isActive ? 'zoomIn' : 'zoomOut',
    ].join(' ');

    const [hoverState, setHoverState] = useState<boolean>(false);

    const handleHover = (e: SyntheticMouseEvent<HTMLDivElement>) => {
      if (e.type === 'mouseenter') {
        setHoverState(true);
      }

      if (e.type === 'mouseleave') {
        setHoverState(false);
      }
    };

    const handleClick = config => {
      onClick && onClick(config);
    };

    return (
      <div onClick={() => handleClick(config)} className={classNames}>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          className="project-box__container">
          <HeaderUbuntu label={(config && config.name) || 'Header'} />

          <div className="project-box__content">
            {config.cover ? (
              <img src={config.cover} alt="Project 1" />
            ) : (
              <div className="project-box__no-image">
                <span className="project-box__no-image-404-txt">404</span>
                <span className="project-box__no-image-txt">
                  Image not found
                </span>
              </div>
            )}

            <div className="project-box__details">
              {config && config.tags && (
                <div className="project-box__details-tags">
                  {config.tags.map((tag, index) => {
                    const {icon, color} = convertTagToIcon(tag.toLowerCase());
                    return (
                      <div
                        style={{
                          backgroundColor: color,
                          animationDelay: `${index * 0.05 + 0.2}s`,
                        }}
                        key={tag}
                        className={`project-box__details-tag animated ${
                          hoverState ? 'bounceIn' : ''
                        }`}>
                        {icon}
                      </div>
                    );
                  })}
                </div>
              )}

              <div
                className={`project-box__details-more animated ${
                  hoverState ? 'flipInX' : ''
                }`}>
                <span>More...</span>

                <div className="project-box__details-more-btn">
                  <GoArrowRight color="#3c80b9" size={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

ProjectBox.displayName = 'ProjectBox';
