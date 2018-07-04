/**
 * Article Detail Page
 *
 * @package Page
 * @since 2018.07.03
 * @copyright mediba.inc
 */
//@ts-ignore
import {Link} from "../shared/routes/index";
import styled from "styled-components";
import ArticleDetailTemplate from "../shared/components/templates/ArticleDetailTemplate";

const Detail = styled.div`
    a {
        text-decoration: none;
    }
    a:visited {
        color: #727272;
    }
    a, a:active, a:hover, a:link, body {
        color: #3c3c3c;
    }
    a.link-text {
      color: #0574eb;
    }
`;

export default () => (
    <Detail>
        <ArticleDetailTemplate/>
    </Detail>
);
