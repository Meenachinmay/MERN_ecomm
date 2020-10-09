import React from 'react';
import PropsTypes from 'prop-types';

const Rating = ({value, text, color}) => {
    return (
        <div className="rating">
            <span>
                <i style={{ color: color }}
                    className={
                        value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                    }
                >
                </i>
            </span>
            <span>
                <i style={{ color: color }}
                    className={
                        value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                    }
                >
                </i>
            </span>
            <span>
                <i style={{ color: color }}
                    className={
                        value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                    }
                >
                </i>
            </span>
            <span>
                <i style={{ color: color }}
                    className={
                        value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                    }
                >
                </i>
            </span>
            <span>
                <i style={{ color: color }}
                    className={
                        value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star'
                    }
                >
                </i>
            </span>
            <span className='pl-1' style={{ fontWeight: 'bold'}}>{text ? text : ''}</span>
        </div>
    )
}

Rating.defaultProps = {
    color: '#f8e825'
}

Rating.propTypes = {
    value: PropsTypes.number.isRequired,
    text: PropsTypes.string.isRequired,
    color: PropsTypes.string,
}

export default Rating;