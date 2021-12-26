import React, { Component } from "react";
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-expo";

// in gl-react you need to statically define "shaders":
const shaders = Shaders.create({
  helloBlue: {
// This is our first fragment shader in GLSL language (OpenGL Shading Language)
// (GLSL code gets compiled and run on the GPU)
    frag: GLSL`
    precision highp float;
    varying vec2 uv;
    uniform float blue;
    void main() {
      gl_FragColor = vec4(uv.x, uv.y, blue, 1.0);
    }
`
  }
});


export class HelloBlue extends Component {
  render() {
    const { blue } = this.props;
    return <Node shader={shaders.helloBlue} uniforms={{ blue }} />;
  }
}

// Our example will pass the slider value to HelloBlue
export default class Example extends Component {
  render() {
    return (
      <Surface style={ {width: 500, height: 500}}>
        <HelloBlue blue={this.props.blue} />
      </Surface>
    );
  }
  static defaultProps = { blue: 0.1 };
}