import { Card } from '@material-ui/core';
import { Fragment, useState } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import PostCard from '../cards/post-card/post-card';
import SearchResultCard from '../cards/search-results-card/SearchResultCard';

const SEARCH_URI = 'https://api.github.com/search/users';

const SearchBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [options, setOptions] = useState([]);

    const handleSearch = (query) => {
        setIsLoading(true);

        fetch(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`)
            .then((resp) => resp.json())
            .then(({ items }) => {
                const options = items.map((i) => ({
                    avatar_url: i.avatar_url,
                    id: i.id,
                    login: i.login,
                }));

                setOptions(options);
                setIsLoading(false);
            });
    };

    // Bypass client-side filtering by returning `true`. Results are already
    // filtered by the search endpoint, so no need to do it again.
    const filterBy = () => true;

    return (
        <AsyncTypeahead
            filterBy={filterBy}
            id="async-example"
            isLoading={isLoading}
            labelKey="login"
            minLength={3}
            onSearch={handleSearch}
            options={options}
            placeholder="Search for a Github user..."
            renderMenuItemChildren={(option, props) => {
                const isCommunity = Math.floor(Math.random() * 1000) % 2 == 0;
                return (
                    <div>
                        <SearchResultCard
                            followerCount={Math.floor(Math.random() * 1000)}
                            linkHref="www.google.com"
                            name={isCommunity ? 'doggo' : 'ahmad'}
                            isCommunnity={isCommunity}
                        ></SearchResultCard>
                    </div>
                );
            }}
        />
    );
};

export default SearchBar;
