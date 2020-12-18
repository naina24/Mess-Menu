import react from 'react';
import './Item.css';

const Menu = (props) => {
   return(
   <>
   <div className='todo_style'>
   <i class="fa fa-times-circle" aria-hidden="true"></i>
   <li>{props.text}</li>
   </div>
   </>
   );
};


export default Menu;