// pages/Admin.jsx
import {Link} from 'react-router-dom';

function Admin() {
  return (
    <div>
        <h1>Panel Admin</h1>      

        <Link to="/admin/save-car">
            <button>Agregar Auto</button>
        </Link>

    </div>
  );
};

export default Admin;  