import { useLottie } from 'lottie-react';

const LottieAnimation = (props) => {
  const { animationData, stop } = props;

  const options = {
    animationData,
    loop: true,
    autoplay: !stop,
  };

  const { View } = useLottie(options);

  return View;
};

export default LottieAnimation;
