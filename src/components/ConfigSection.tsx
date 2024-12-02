interface ConfigSectionProps {
  title: string;
  children: React.ReactNode;
}

const ConfigSection: React.FC<ConfigSectionProps> = ({ title, children }) => (
  <div className="configurator__section">
    <div className="configurator__section__title">{title}</div>
    <div className="configurator__section__values">{children}</div>
  </div>
);

export default ConfigSection;
