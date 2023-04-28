
export default chooseImage(typeIcon => {
  console.log(typeIcon)
  let src = '';

  switch (typeIcon) {
    case "04n":
      src = '../../../../assets/images/HeavyCloud.png';
      break;
    case "01n":
      src = '../../../../assets/images/Clear.png';
      break;
    case "02d":
      src = '../../../../assets/images/HeavyCloud.png';
      break;
    case "10d":
      src = '../../../../assets/images/LightRain.png';
      break;
  }
  return src;

})


