interface ConfigItemProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
  color?: string;
  image?: string
}

const ConfigItem: React.FC<ConfigItemProps> = ({
  isActive,
  onClick,
  label,
  color,
  image
}) => {
  return (
    <div className={`item ${isActive ? "item--active" : ""}`} onClick={onClick}>
      {color && <div className="item__dot" style={{ backgroundColor: color }} />}
      {image && <div className="item__dot" style={{ backgroundImage: `url(${image})`, transition: 'background-size 0.3s ease' }} />}
      <div className="item__label">{label}</div>
    </div>
  )
};

export default ConfigItem;
