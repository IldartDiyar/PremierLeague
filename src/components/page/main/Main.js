import classes from './main.module.css'
export default function Main() {
    return ( 
    <div className={classes.main}>
        <strong><em>Main Page</em></strong>
        <h1 className={classes.h1}>Salah`s game</h1>
        <iframe className={classes.video} src = 'https://www.youtube.com/embed/7zRSqKZNJdA'/>
    </div>

    );
}