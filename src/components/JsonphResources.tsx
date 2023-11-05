import React from 'react';

type MyComponentProps = {
    resources: {id: string; title: string;}[];
}

const JsonphResouces = (props: MyComponentProps) => {
    return (
        <React.Fragment>
            {props.resources.map((resource) => (
                <p key={resource.id}>{resource.title}</p>
            ))}
        </React.Fragment>
    )
};

export default JsonphResouces;