import styled from 'styled-components';

export const StyledTable = styled.table`
    caption-side: top;
    border: none;
    border-collapse: collapse;
    caption-side: bottom;
    td,
    th {
        border: none;
        padding: 10px 15px;

        &.heading {
            text-transform: capitalize;
            text-align: left;
        }
    }
    td {
        span {
            margin: 0 10px;
            svg:hover {
                cursor: pointer;
            }
        }
    }

    tbody tr {
        :nth-of-type(odd) {
            background-color: #efefef;
        }
        :hover {
            background-color: #c2c2c2;
        }
    }
    thead > tr {
        background-color: #b1acac;
    }
    caption {
        font-size: 0.9em;
        padding: 5px;
        font-weight: bold;
        display: none;
    }
`;
