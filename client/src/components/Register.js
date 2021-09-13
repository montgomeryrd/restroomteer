import { useSetState } from '../utils/UseSetState';

const Register = () => {
    const [state, setState] = useSetState({
        name: "",
        email: "",
        phone: ""
      });
    
      return (
        <form>
          <label>Name</label>
          <input
            type="text"
            value={state.name}
            onChange={e => setState({ name: e.target.value })}
          />
          <label>Email</label>
          <input
            type="text"
            value={state.email}
            onChange={e => setState({ email: e.target.value })}
          />
          <label>Phone</label>
          <input
            type="text"
            value={state.phone}
            onChange={e => setState({ phone: e.target.value })}
          />
        </form>
      );
}

export default Register;