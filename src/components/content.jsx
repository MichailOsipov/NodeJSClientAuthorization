import React from 'react';
import PropTypes from 'prop-types';

export const Content = ({
    onGetContent,
    content
}) => (
    <div>
        <button
            type="button"
            onClick={onGetContent}
        >
            Get content!
        </button><br />
        <span>Some Content:</span>
        {content}
    </div>
);

Content.propTypes = {
    onGetContent: PropTypes.func,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};
