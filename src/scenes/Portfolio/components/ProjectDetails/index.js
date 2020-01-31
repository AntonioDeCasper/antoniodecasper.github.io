//@flow
import React, {memo} from 'react';
import ImageGallery from 'react-image-gallery';
import {useTheme, useDispatch} from '../../../../store';
import {useTranslation} from 'react-i18next';

//Import COMPONENTS
import HeaderUbuntu from '../HeaderUbuntu';
import {TextBackline, Button} from '../../../../components';

//Import UTILS
import {convertTagToIcon} from '../../utils';

//Import ICONS
import {FaArrowLeft} from 'react-icons/fa';

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

  const {primaryColor, secondaryColor, textColor} = useTheme().colors.portfolio;
  const {t} = useTranslation('portfolio');
  const {closeProjectMenu} = useDispatch();

  const handleCloseMenu = () => {
    closeProjectMenu();
  };

  return (
    <div className={classNames}>
      <div
        style={{borderColor: secondaryColor}}
        className="project-details__header">
        <Button
          className="project-details__header-btn"
          text={
            <>
              <FaArrowLeft />
              <span>Back</span>
            </>
          }
          onClick={handleCloseMenu}
        />
      </div>

      <div className="project-details__container">
        <div className="paragraph">
          <div className="header header_type_h3 header_tt_uppercase header_fw_bold">
            <span style={{color: secondaryColor}}>{t('ProjectText')}</span>
            <span>:</span>
          </div>

          <div className="header header_type_h3 header_tt_uppercase header_fw_bold project-details__project-name-txt">
            {data ? data.name : 'Jonh Doe'}
          </div>
        </div>

        <div className="paragraph paragraph_paddings_large project-details__paragraph-slider">
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

        <TextBackline
          textWrapperClassName="animated bounceInRight"
          className="project-details__description-header"
          options={{text: {backgroundColor: primaryColor}}}>
          <span
            className="header header_type_h4 header_tt_uppercase header_fw_medium"
            style={{color: textColor}}>
            {t('HeaderAboutProject')}
          </span>
        </TextBackline>

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
