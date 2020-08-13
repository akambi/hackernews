/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { debounce } from 'underscore';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectStories,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import ResultList from 'components/ResultList';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadStories } from '../App/actions';
import { changeSearchQuery } from './actions';
import { makeSelectSearchQuery } from './selectors';
import reducer from './reducer';
import saga from './saga';
import './Homepage.css';

const key = 'home';

export function HomePage({
  searchQuery,
  loading,
  error,
  stories,
  onSubmitForm,
  onChangeSearchQuery,
}) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // submit the form to load stories
    onSubmitForm();
  }, []);

  const ResultListProps = {
    loading,
    error,
    stories,
  };

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js HackerNews application homepage"
        />
      </Helmet>
      <div>
        <Section>
          <header className="SearchHeader">
            <Form onSubmit={onSubmitForm}>
              <label htmlFor="searchQuery">
                <FormattedMessage {...messages.searchStories} />
                <div className="SearchHeader_container">
                  <Input
                    id="searchQuery"
                    type="text"
                    placeholder=""
                    value={searchQuery}
                    onChange={onChangeSearchQuery}
                    onKeyup={onChangeSearchQuery}
                    className="SearchHeader_input"
                  />
                </div>
              </label>
            </Form>
          </header>
          <ResultList {...ResultListProps} />
        </Section>
      </div>
    </article>
  );
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  stories: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  searchQuery: PropTypes.string,
  onChangeSearchQuery: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  stories: makeSelectStories(),
  searchQuery: makeSelectSearchQuery(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchQuery: evt => {
      /* signal to React not to nullify the event object */
      evt.persist();
      dispatch(changeSearchQuery(evt.target.value));

      if (!this.debouncedFn) {
        this.debouncedFn = debounce(() => {
          dispatch(loadStories());
        }, 300);
      }
      this.debouncedFn();
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadStories());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
