import { useLottie } from 'lottie-react';

const LottieAnimation = (props) => {
  const { animationData } = props;

  const options = {
    animationData,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default LottieAnimation;
