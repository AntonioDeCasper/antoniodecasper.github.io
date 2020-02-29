// @flow
import React, {memo, useEffect, useState} from 'react';
import {useTheme} from '../../../../context';
import {InlineIcon, Icon} from '@iconify/react';

//Import ICONS
import electronIcon from '@iconify/icons-simple-icons/electron';
import html5Icon from '@iconify/icons-simple-icons/html5';
import css3Icon from '@iconify/icons-simple-icons/css3';
import javascriptIcon from '@iconify/icons-simple-icons/javascript';
import jqueryIcon from '@iconify/icons-simple-icons/jquery';
import reactIcon from '@iconify/icons-simple-icons/react';
import nodeDotJs from '@iconify/icons-simple-icons/node-dot-js';
import mongodbIcon from '@iconify/icons-simple-icons/mongodb';

import questionCircleFilled from '@iconify/icons-ant-design/question-circle-filled';

import reduxIcon from '@iconify/icons-logos/redux';
import flowIcon from '@iconify/icons-logos/flow';
import webpackIcon from '@iconify/icons-logos/webpack';
import gulpIcon from '@iconify/icons-logos/gulp';
import sassIcon from '@iconify/icons-logos/sass';
import gitIcon from '@iconify/icons-logos/git-icon';
import dockerIcon from '@iconify/icons-logos/docker-icon';

//Import MOCKS
import {progressBars} from './mockData.json';

// Import COMPONENTS
import {
  TextBackline,
  ProgressBar,
  Progresser,
  Title,
} from '../../../../components';

// Import STYLES
import './styles.css';

type Props = {|className?: string, isActive?: boolean|};

const SkillsScreen = memo<Props>(({className, isActive}) => {
  const classNames = [
    'skills-screen',
    className,
    isActive ? 'isActive' : '',
  ].join(' ');
  const {primaryColor, secondaryColor} = useTheme().colors.about;
  const [isPageReadyState, setIsPageReadyState] = useState<boolean>(false);

  useEffect(() => {
    isActive && setIsPageReadyState(true);
  }, []);

  const setIconByName = name => {
    switch (name) {
      case 'html5Icon':
        return html5Icon;
      case 'css3Icon':
        return css3Icon;
      case 'javascriptIcon':
        return javascriptIcon;
      case 'jqueryIcon':
        return jqueryIcon;
      case 'reactIcon':
        return reactIcon;
      case 'nodeDotJs':
        return nodeDotJs;
      case 'mongodbIcon':
        return mongodbIcon;
      case 'electronIcon':
        return electronIcon;
      default:
        return questionCircleFilled;
    }
  };

  const handleEndTransition = (e: SyntheticTransitionEvent<HTMLDivElement>) => {
    const isValidElement = new Set(
      e.nativeEvent.srcElement.className.split(' '),
    ).has('skills-screen');

    if (isValidElement) {
      if (isActive && !isPageReadyState) {
        setIsPageReadyState(true);
      }

      if (!isActive && isPageReadyState) {
        setIsPageReadyState(false);
      }
    }
  };

  return (
    <div
      onTransitionEnd={handleEndTransition}
      style={{backgroundColor: primaryColor}}
      className={classNames}>
      <div className="header header_type_h1 header_tt_uppercase header_fw_bold animated fadeIn">
        <span style={{color: secondaryColor}}>My</span>
        <span style={{marginRight: 12}}>.</span>
        <span>Advantages</span>
      </div>
      <TextBackline
        className="page-about__backline-intro"
        options={{
          line: {color: secondaryColor},
          text: {
            background: `linear-gradient( ${primaryColor} 70%, transparent)`,
          },
        }}
        textWrapperClassName="animated bounceInRight page-about__backline-intro-text">
        <span
          className="text-common text-common_tt_uppercase"
          style={{color: secondaryColor}}>
          Check my thoughts about myself.
        </span>
      </TextBackline>
      <div className="paragraph paragraph_paddings_medium skills-screen__introduction">
        <span className="text-common">
          Besides skills listed below I&apos;m also use{' '}
        </span>

        <Icon
          className="skills-screen__introduction-icon"
          icon={reduxIcon}
          height={16}
          width={16}
        />
        <span className="text-common">Redux, </span>
        <Icon
          className="skills-screen__introduction-icon"
          icon={flowIcon}
          height={16}
          width={16}
        />
        <span className="text-common">Flow, </span>
        <Icon
          className="skills-screen__introduction-icon"
          icon={webpackIcon}
          height={22}
          width={22}
        />
        <span className="text-common">Webpack, </span>
        <Icon
          className="skills-screen__introduction-icon"
          icon={gulpIcon}
          height={22}
          width={22}
        />
        <span className="text-common">Gulp, </span>
        <Icon
          className="skills-screen__introduction-icon"
          icon={sassIcon}
          height={20}
          width={20}
        />
        <span className="text-common">SCSS, </span>
        <Icon
          className="skills-screen__introduction-icon"
          icon={dockerIcon}
          height={20}
          width={20}
        />
        <span className="text-common">Docker, </span>
        <Icon
          className="skills-screen__introduction-icon"
          icon={gitIcon}
          height={18}
          width={18}
        />
        <span className="text-common">
          Mercurial/Git and more in my usual work.
        </span>
      </div>
      <Title type="h4" uppercase>
        Skills
      </Title>
      <div className="skills-screen__skills-container">
        {progressBars.map(progressRow => (
          <div key={progressRow.index} className="skills-screen__skills-row">
            {progressRow.value.map(progressBar => (
              <ProgressBar
                key={progressBar.index}
                className="skills-screen__skill-bar"
                label={progressBar.name}
                icon={
                  <InlineIcon
                    icon={setIconByName(progressBar.icon.name)}
                    height={progressBar.icon.size}
                    width={progressBar.icon.size}
                    color={progressBar.icon.color}
                  />
                }
                progressValue={progressBar.value}
                color={`#FF5722`}
                isActive={isPageReadyState}
                animation={{
                  duration: '500ms',
                  delay: `${0.1 * parseInt(progressBar.index)}s`,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      <Title type="h4" uppercase className="skills-screen__progress-header">
        Progress
      </Title>

      <div className="skills-screen__progress-container">
        <Progresser
          activeId={['s2015', 'a2017']}
          lineColor={secondaryColor}
          className="skills-screen__progress-line">
          <Progresser.Step
            id="s2015"
            description={
              <span className="text-common text-common_fz_s text-common_weight_bold text-common_tt_uppercase">
                Fleelance
              </span>
            }
            size={100}
            colors={{
              circleColor: secondaryColor,
              innerColor: secondaryColor,
              hoverColor: '#d84315',
            }}>
            <span className="text-common text-common_fz_xxs text-common_weight_bold text-common_tt_uppercase">
              spring
            </span>
            <span className="text-common text-common_weight_bold text-common_fz_l">
              2015
            </span>
          </Progresser.Step>

          <Progresser.Step
            id="a2017"
            description={
              <span className="text-common text-common_fz_s">Teleofis</span>
            }
            outerCircleBottom
            size={100}
            colors={{circleColor: secondaryColor, innerColor: secondaryColor}}>
            <span className="text-common text-common_fz_xxs text-common_weight_bold text-common_tt_uppercase">
              autumn
            </span>
            <span className="text-common text-common_weight_bold text-common_fz_l">
              2017
            </span>
          </Progresser.Step>

          <Progresser.Step
            description={
              <span className="text-common text-common_fz_s">Teleofis</span>
            }
            size={100}
            color={secondaryColor}>
            <span className="text-common text-common_fz_xxs text-common_weight_bold text-common_tt_uppercase">
              summer
            </span>
            <span className="text-common text-common_weight_bold text-common_fz_l">
              2018
            </span>
          </Progresser.Step>

          <Progresser.Step
            description={
              <span className="text-common text-common_fz_s">Teleofis</span>
            }
            outerCircleBottom
            size={100}
            color={secondaryColor}>
            <span className="text-common text-common_fz_xxs text-common_weight_bold text-common_tt_uppercase">
              spring
            </span>
            <span className="text-common text-common_weight_bold text-common_fz_l">
              2019
            </span>
          </Progresser.Step>
        </Progresser>
      </div>
    </div>
  );
});

SkillsScreen.displayName = 'SkillsScreen';

export default SkillsScreen;
