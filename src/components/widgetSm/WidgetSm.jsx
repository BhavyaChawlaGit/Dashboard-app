import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import Avatar from '@mui/material/Avatar';
export default function WidgetSm() {
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
        <Avatar {...stringAvatar('Anna Keller')} style={{marginRight: "10px"}}/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer I</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
        <Avatar {...stringAvatar('Brian Conner')} style={{marginRight: "10px"}}/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Brian Conner</span>
            <span className="widgetSmUserTitle">Software Engineer II</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
        <Avatar {...stringAvatar('Cameron Diaz')} style={{marginRight: "10px"}}/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Cameron Diaz</span>
            <span className="widgetSmUserTitle">Software Engineer II</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
        <Avatar {...stringAvatar('Fiona Brown')} style={{marginRight: "10px"}}/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Fiona Brown</span>
            <span className="widgetSmUserTitle">Software Engineer III</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
        <Avatar {...stringAvatar('George Yang')} style={{marginRight: "10px"}}/>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">George Yang</span>
            <span className="widgetSmUserTitle">Software Engineer III</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
