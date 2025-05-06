export default function ButtonPrimary({ onClick, children }) {
    return (
      <button onClick={onClick} className="btn btn-primary">
        {children}
      </button>
    );
  }