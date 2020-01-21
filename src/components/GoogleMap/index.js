//@flow
import React, {useEffect, useState, useRef} from 'react';
import ReactDOMServer from 'react-dom/server';

//Import ICONS
import marker from '../../assets/images/myMarker.svg';
import {FaMapMarkerAlt} from 'react-icons/fa';

// Import STYLES
import './styles.css';
import {mapStyles} from './mapStyles';

type Props = {className?: string};

const GOOGLE_API_KEY = 'AIzaSyDZ476JzIdK-qGKRzlhTQ4zi-uK1SCGvH8';
const LOCATION = {
  lat: 53.2719855,
  lng: 83.764427,
};

const GoogleMap = ({className}: Props) => {
  const classNames = ['google-map', className].join(' ');

  const [googleMapState, setGoogleMapState] = useState<any>(null);

  const googleMapRef = useRef(null);

  useEffect(() => {
    const documentScriptsList = Array.from(
      document.getElementsByTagName('script'),
    );

    const createGoogleMap = () =>
      new window.google.maps.Map(googleMapRef.current, {
        zoom: 5,
        center: {
          lat: LOCATION.lat,
          lng: LOCATION.lng - 24,
        },
        disableDefaultUI: true,
        gestureHandling: 'none',
        styles: mapStyles.lightGray,
        backgroundColor: 'none',
      });

    // Check if we already append google script at the document body
    if (
      documentScriptsList.filter(
        script =>
          script.src ===
          `https://maps.googleapis.com/maps/api/js?v=weekly&key=${GOOGLE_API_KEY}`,
      ).length === 0
    ) {
      const googleMapScriptElement = document.createElement('script');

      googleMapScriptElement.src = `https://maps.googleapis.com/maps/api/js?v=weekly&key=${GOOGLE_API_KEY}`;
      window.document.body.appendChild(googleMapScriptElement);
      googleMapScriptElement.addEventListener('load', () => {
        setGoogleMapState(createGoogleMap());
      });
    } else {
      setGoogleMapState(createGoogleMap());
    }
  }, []);

  useEffect(() => {
    const createMarker = () => {
      return new window.google.maps.Marker({
        position: LOCATION,
        map: googleMapState,
        // icon: ReactDOMServer.renderToString(
        //   <img className="hello" src={marker} />,
        // ),
      });
    };

    googleMapState && createMarker();
  }, [googleMapState]);

  return (
    <>
      <div ref={googleMapRef} className={classNames}></div>
    </>
  );
};

export default GoogleMap;
