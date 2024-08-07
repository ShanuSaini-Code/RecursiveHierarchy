import { useState } from "react";

const ListData = ({ field }) => {
  const [expanded, setExpanded] = useState(false);

  const handleOnClick = () => {
    setExpanded(!expanded);
  }

  const customStyle = {
    cursor : field?.child?.length > 0 ? 'pointer' : 'default'
  }

  return (
    <li>
      <div onClick={() => handleOnClick()} style={customStyle}>
        {field?.name}
      </div>
        {expanded && field?.child && field.child?.length > 0 &&
          <ul>
            {field.child.map(data => <ListData key={`${data.name} name`} field={data} />)}
          </ul>
        }
    </li>
  )
}

const TreeView = ({ inputData }) => {
  return (
    <ul>
      {inputData?.data && inputData?.data?.length > 0 &&
        inputData.data.map(field => <ListData key={`${field.name} name`} field={field} />)
      }
    </ul>
  );
}

export default TreeView;
