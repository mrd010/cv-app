import { v4 as uuidv4 } from 'uuid';
import MaterialIcon from '../Icons/MaterialIcon';
import defaultCV from '../../data/defaultCV';
import { useState } from 'react';
import { singlizeNoun, capitalize } from '../../helpers/utils';
import GeneralSectionContentRow from '../RowContents/GeneralSectionContentRow';

const GeneralSectionContent = ({ sectionName, display }) => {
  let initialList = null;
  switch (sectionName) {
    case 'skills':
      initialList = defaultCV.skills.map((skill) => {
        return { skill, id: uuidv4() };
      });
      break;
    case 'education':
      initialList = defaultCV.education.map((edu) => {
        return { ...edu, id: uuidv4() };
      });
      break;
    case 'experience':
      initialList = defaultCV.experience.map((exp) => {
        return { ...exp, id: uuidv4() };
      });
      break;
    case 'projects':
      initialList = defaultCV.projects.map((prj) => {
        return { ...prj, id: uuidv4() };
      });
      break;
    case 'awards':
      initialList = defaultCV.awards.map((award) => {
        return { ...award, id: uuidv4() };
      });
      break;

    default:
      break;
  }

  const [infoList, setInfoList] = useState(initialList);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

  const handleRowSelection = (id) => {
    const index = infoList.findIndex((listItem) => listItem.id === id);
    setSelectedRowIndex(index);
  };

  const handleAddItem = () => {
    let newListItem = {};
    switch (sectionName) {
      case 'skills':
        newListItem = { skill: '', id: uuidv4() };
        break;
      case 'education':
        newListItem = { department: '', start: '', end: '', gpa: '', id: uuidv4() };
        break;
      case 'experience':
        newListItem = { position: '', start: '', end: '', id: uuidv4() };
        break;
      case 'projects':
        newListItem = { title: '', start: '', end: '', id: uuidv4() };
        break;
      case 'awards':
        newListItem = { title: '', date: '', id: uuidv4() };
        break;

      default:
        break;
    }
    setInfoList([...infoList, newListItem]);
    setSelectedRowIndex(infoList.length);
  };

  const handleSaveContent = (id, newContent) => {
    setInfoList(
      infoList.map((listItem) => {
        if (id === listItem.id) {
          return { ...newContent };
        }
        return listItem;
      })
    );
  };
  const handleRemoveItem = (id) => {
    setInfoList(infoList.filter((listItem) => listItem.id !== id));
    setSelectedRowIndex((index) => (index > 0 ? index - 1 : index));
  };

  const list =
    infoList.length > 0 ? (
      infoList.map((listItem, index) => {
        return (
          <GeneralSectionContentRow
            key={listItem.id}
            rowType={singlizeNoun(sectionName)}
            rowData={listItem}
            isSelected={selectedRowIndex === index}
            onSaveContent={handleSaveContent}
            onRemoveItem={handleRemoveItem}
            onRowSelection={handleRowSelection}
          ></GeneralSectionContentRow>
        );
      })
    ) : (
      <h3 className="empty-info">Add {capitalize(sectionName)}</h3>
    );

  return (
    <div className={`section-content ${!display ? 'hidden' : ''}`}>
      <div className="list">{list}</div>
      <button className="add-button" onClick={handleAddItem}>
        <MaterialIcon>add</MaterialIcon>
      </button>
    </div>
  );
};

export default GeneralSectionContent;
