import React from "react";
import { Row, Col } from "react-bootstrap";
import { Paragraph } from "../elements/Paragraph";
import styled from "styled-components";

const NestedLiWrap = styled.li`
  list-style: none;
`;

export const NestedComps = {
  paragraph: ({ content }) => <Paragraph content={content} />,
  "unordered-list": ({ content }) => {
    return (
      <ul>
        {content.map((li, i) => {
          return (
            <NestedLiWrap key={li.nodeType + i}>
              {li.content.map((p, j) => {
                return (
                  <Paragraph
                    key={li.nodeType + i + p.nodeType + j}
                    content={p.content}
                  />
                );
              })}
            </NestedLiWrap>
          );
        })}
      </ul>
    );
  },
};

export const BaseComps = {
  paragraph: Paragraph,
  "list-item": ({ content }) => {
    //console.log('list-item:',content)
    return (
      <li className="droplet">
        <Row>
          <Col xs="auto" sm="auto">
            bull
          </Col>
          <Col>
            {content.map((el, i) => {
              //console.log(el)
              // let JSX = () => <div>shit</div>
              // switch(true){
              //     case el.nodeType === 'paragraph':
              const JSX = NestedComps[el.nodeType];
              //         break;
              // }
              //console.log(JSX,el)
              return JSX ? (
                <JSX key={el.nodeType + i} content={el.content} />
              ) : (
                <em className="error">
                  Nested list-item node error: {el.nodeType}
                </em>
              );
            })}
          </Col>
        </Row>
      </li>
    );
  },
};

export const locale = "en-US";
