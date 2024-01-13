import { useState } from 'react';
import defaultCV from '../data/defaultCV';
import PersonalInfoRow from './RowContents/PersonalInfoRow';

const ContactInfo = () => {
  const [contactInfo, setContactInfo] = useState(defaultCV.contactInfo);

  const handleContactEdit = (infoLabel, newValue) => {
    setContactInfo({ ...contactInfo, [infoLabel]: newValue });
  };

  return (
    <div className="contact-info">
      <PersonalInfoRow
        labelName="address"
        value={contactInfo.address}
        onValueEdit={handleContactEdit}
        inputType="textarea"
      ></PersonalInfoRow>
      <PersonalInfoRow
        labelName="phone"
        value={contactInfo.phone}
        onValueEdit={handleContactEdit}
        inputType="tel"
      ></PersonalInfoRow>
      <PersonalInfoRow
        labelName="email"
        value={contactInfo.email}
        onValueEdit={handleContactEdit}
        inputType="email"
      ></PersonalInfoRow>
    </div>
  );
};

export default ContactInfo;
