import { useState } from "react";
//import { MouseEvent } from "react";

//{items: [], heading: string}
//typescript interface
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //items = [];
  //const message = items.length === 0 ? <p>No Item Found</p> : null; - by using variable
  //by using function
  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No Item Found</p> : null;
  //   };

  //event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  const [selectedIndex, setselectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {/* {getMessage()} */}
      {/* {items.length === 0 ? <p>No Item Found</p> : null}; - conditional statement , below is another way */}
      {items.length === 0 && <p>No Item Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={() => console.log("Clicked " + item, index)}

            //onClick={(event) => console.log(event)}
            //onClick={handleClick}

            onClick={() => {
              setselectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
