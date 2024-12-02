interface ConfigItemProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
  color?: string;
}

const ConfigItem: React.FC<ConfigItemProps> = ({
  isActive,
  onClick,
  label,
  color,
}) => (
  <div className={`item ${isActive ? "item--active" : ""}`} onClick={onClick}>
    {color && <div className="item__dot" style={{ backgroundColor: color }} />}
    <div className="item__label">{label}</div>
  </div>
);

export default ConfigItem;
