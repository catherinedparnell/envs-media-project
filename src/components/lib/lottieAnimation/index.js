import { useLottie } from 'lottie-react';

const LottieAnimation = (props) => {
  const { animationData, stop, ref } = props;

  const options = {
    animationData,
    loop: true,
    autoplay: !stop,
    lottieRef: ref || null,
  };

  const { View } = useLottie(options);

  return View;
};

export default LottieAnimation;
