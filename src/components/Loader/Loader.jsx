import { Grid } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <Grid
        height="80"
        width="80"
        color="#bb90dc"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
