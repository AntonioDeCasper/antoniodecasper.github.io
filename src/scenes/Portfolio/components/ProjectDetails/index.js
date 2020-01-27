//@flow
import React, {memo, useContext} from 'react';
import ImageGallery from 'react-image-gallery';
import {ThemeContext} from '../../../../store';
import {useTranslation} from 'react-i18next';

//Import COMPONENTS
import HeaderUbuntu from '../HeaderUbuntu';

//Import UTILS
import {convertTagToIcon} from '../../utils';

// Import STYLES
import './styles.css';

type Props = {|className?: string, data: ?{[string]: any}|};

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

const ProjectDetails = memo<Props>(({className, data}) => {
  const classNames = ['project-details', className].join(' ');

  const {primaryColor, secondaryColor, textColor} = useContext(
    ThemeContext,
  ).colors.portfolio;
  const {t} = useTranslation('portfolio');

  return (
    <div className={classNames}>
      <div className="project-details__container">
        <div className="paragraph">
          <div className="header header_type_h3 header_tt_uppercase header_fw_bold">
            <span style={{color: secondaryColor}}>{t('ProjectText')}</span>
            <span>:</span>
          </div>
          <div className="header header_type_h3 header_tt_uppercase header_fw_bold">
            {data ? data.name : 'Jonh Doe'}
          </div>
        </div>

        <div className="paragraph paragraph_paddings_large">
          <div className="project-details__slider">
            <ImageGallery
              items={data ? data.gallery : images}
              lazyLoad={true}
              useTranslate3D={false}
              autoPlay={true}
            />

            <HeaderUbuntu label={data ? data.name : ''} />
          </div>
        </div>

        <div className="paragraph text-backline project-details__description-header">
          <div
            style={{
              background: primaryColor,
            }}
            className="header header_type_h4 header_tt_uppercase header_fw_medium text-backline__text-box">
            <span style={{color: textColor}}>{t('HeaderAboutProject')}</span>
          </div>
          <div className="text-backline__line"></div>
        </div>

        <div className="paragraph paragraph_align_left">
          <div className="text-common">{data ? data.description : 'Empty'}</div>
        </div>
      </div>

      <div className="project-details__tags">
        {data &&
          data.tags.map((tag, index) => {
            const {icon, color} = convertTagToIcon(tag.toLowerCase());
            return (
              <div
                style={{backgroundColor: color}}
                className="project-details__tag"
                key={index}>
                {icon}
              </div>
            );
          })}
      </div>
    </div>
  );
});

ProjectDetails.displayName = 'ProjectDetails';

export default ProjectDetails;
