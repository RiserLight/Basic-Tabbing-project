
import styles from './styles.module.css';

const Tab=({tab,tabIndex,currTab,onTabSelected})=>{
  return (
    <div
    className={tabIndex==currTab? styles.active:null}
    onClick={()=>onTabSelected(tabIndex)}
    >
    {tab.title}
    </div>
  );
}

export default Tab;