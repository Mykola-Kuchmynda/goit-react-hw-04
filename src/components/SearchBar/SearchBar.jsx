export default function SearchBar({ onSubmit }) {
    return (
        <header>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    const query = e.target.elements.query.value.trim();
                    if (query) onSubmit(query);
                }}
            >
                <input
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
}