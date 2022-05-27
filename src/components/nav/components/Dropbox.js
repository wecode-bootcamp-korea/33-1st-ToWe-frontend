import './Dropbox.scss';

const Dropbox = ({ dropBox }) => {
  const { id, title } = dropBox;
  return <div className="dropbox">{id}</div>;
};

export default Dropbox;
