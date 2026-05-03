import './TabButton.css';

export default function TabButton({children, onSelect, isActiveTab}) {
    return (
       <li>
        <button className={isActiveTab ? 'active' : ''} onClick={onSelect}>{children}</button></li>
    );
}