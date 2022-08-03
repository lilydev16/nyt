import './Header.css';

const Header = ({ today }) => {
  const month = today.split(' ').slice(1, 2)
  let numDate = today.split(' ').slice(2).join(', ')
  const formatMonths = {
    'Jan': 'January',
    'Feb': 'February',
    'Mar': 'March',
    'Apr': 'April',
    'May': 'May',
    'Jun': 'June',
    'Jul': 'July',
    'Aug': 'August',
    'Sep': 'September',
    'Oct': 'October',
    'Nov': 'November',
    'Dec': 'December'
  }

  if (numDate.charAt(0) === '0') {
    numDate = numDate.slice(1)
  }

  return (
    <header>
      <h1>The New York Times</h1>
      <p>Top stories for today, {formatMonths[month] + ' ' + numDate}</p>
    </header>
  )

}

export default Header;