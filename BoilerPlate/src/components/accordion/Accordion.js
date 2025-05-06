export default function Accordion({ title, children }) {
    return (
      <div className="collapse collapse-arrow ">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          {title}
        </div>
        <div className="collapse-content">
          {children}
        </div>
      </div>
    );
  }
  