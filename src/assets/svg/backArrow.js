import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function BackArrow(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 15.745 10.501"
      {...props}>
      <Path
        data-name="Icon ionic-ios-arrow-round-back"
        d="M5.704.201a.715.715 0 01.005 1.006l-3.32 3.33H15.04a.711.711 0 010 1.422H2.39l3.325 3.33a.72.72 0 01-.005 1.006.708.708 0 01-1-.005L.203 5.749a.8.8 0 01-.148-.224A.679.679 0 010 5.252a.713.713 0 01.2-.5L4.706.213a.7.7 0 01.998-.012z"
        fill="#fff"
      />
    </Svg>
  );
}

export default BackArrow;
