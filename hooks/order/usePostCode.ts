import { useDaumPostcodePopup } from 'react-daum-postcode';

function usePostCode(setValue: any) {
  const CURRENT_URL =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(CURRENT_URL);

  const onClickHandler = async () => {
    open({ onComplete: handleComplete });
  };

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.bname !== '') {
      extraAddress += data.bname;
    }
    if (data.buildingName !== '') {
      extraAddress +=
        extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
    }
    fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    setValue('zipcode', data.zonecode);
    setValue('address1', fullAddress);
  };

  return { onClickHandler };
}

export default usePostCode;
