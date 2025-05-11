import css from './SearchBar.module.css'

export default function SearchBar({ onSubmit }) {
    return (
        <header className={css.header}>
            <form className={css.form}
                onSubmit={e => {
                    e.preventDefault();
                    const query = e.target.elements.query.value.trim();
                    if (query) onSubmit(query);
                }}
            >
                <input className={css.input}
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.button} type="submit">Search</button>
            </form>
        </header>
    );
}