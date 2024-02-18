import "./widgetLg.css";
import Avatar from '@mui/material/Avatar';
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
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
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">           
            <Avatar {...stringAvatar('Susan Carol')} style={{marginRight: "10px"}}/>
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jan 2023</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <Avatar {...stringAvatar('Jason Segel')} style={{marginRight: "10px"}} />
            <span className="widgetLgName">Jason Segel</span>
          </td>
          <td className="widgetLgDate">5 Jan 2023</td>
          <td className="widgetLgAmount">$132.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <Avatar {...stringAvatar('Samuel Dylan')} style={{marginRight: "10px"}} />
            <span className="widgetLgName">Samuel Dylan</span>
          </td>
          <td className="widgetLgDate">8 Feb 2023</td>
          <td className="widgetLgAmount">$152.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
          <Avatar {...stringAvatar('Amelia Collins')} style={{marginRight: "10px"}} />
            <span className="widgetLgName">Amelia Collins</span>
          </td>
          <td className="widgetLgDate">15 Mar 2023</td>
          <td className="widgetLgAmount">$167.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
