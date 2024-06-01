import React from "react";
import Html5Icon from "@public/brand-icons/html5.svg";
import Css3Icon from "@public/brand-icons/css3.svg";
import JavaScriptIcon from "@public/brand-icons/javascript.svg";
import TypeScriptIcon from "@public/brand-icons/typescript.svg";
import ReactIcon from "@public/brand-icons/react.svg";
import NextjsIcon from "@public/brand-icons/nextjs.svg";
import TailwindcssIcon from "@public/brand-icons/tailwind.svg";
import AngularIcon from "@public/brand-icons/angular.svg";
import JavaIcon from "@public/brand-icons/java.svg";
import KotlinIcon from "@public/brand-icons/kotlin.svg";
import CppIcon from "@public/brand-icons/cpp.svg";
import CSharpIcon from "@public/brand-icons/c-sharp.svg";
import NodejsIcon from "@public/brand-icons/nodejs.svg";
import PhpIcon from "@public/brand-icons/php.svg";
import PythonIcon from "@public/brand-icons/python.svg";
import FastApiIcon from "@public/brand-icons/fastapi.svg";
import LaravelIcon from "@public/brand-icons/laravel.svg";
import RubyIcon from "@public/brand-icons/ruby.svg";
import RubyOnRailsIcon from "@public/brand-icons/ruby_on_rails.svg";
import GraphQlIcon from "@public/brand-icons/graphql.svg";
import SeoIcon from "@public/brand-icons/seo.svg";
import SpringIcon from "@public/brand-icons/spring.svg";
import SymphonyIcon from "@public/brand-icons/symphony.svg";
import NginxIcon from "@public/brand-icons/nginx.svg";
import RedisIcon from "@public/brand-icons/redis.svg";
import RabbitMqIcon from "@public/brand-icons/rabbitmq.svg";
import KafkaIcon from "@public/brand-icons/kafka.svg";
import SqlIcon from "@public/brand-icons/sql.svg";
import PostgresqlIcon from "@public/brand-icons/postgresql.svg";
import DockerIcon from "@public/brand-icons/docker.svg";
import KubernetesIcon from "@public/brand-icons/kubernetes.svg";
import AwsIcon from "@public/brand-icons/aws.svg";
import AzureIcon from "@public/brand-icons/azure.svg";
import JenkinsIcon from "@public/brand-icons/jenkins.svg";
import GitIcon from "@public/brand-icons/git.svg";
import UbuntuIcon from "@public/brand-icons/ubuntu.svg";
import DebianIcon from "@public/brand-icons/debian.svg";
import IconSet from "./IconSet";

const icons = [
  [
    Html5Icon,
    Css3Icon,
    JavaScriptIcon,
    TypeScriptIcon,
    PhpIcon,
    PythonIcon,
    RubyIcon,
    JavaIcon,
    KotlinIcon,
    CppIcon,
    CSharpIcon,
  ],
  [ReactIcon, NextjsIcon, TailwindcssIcon, AngularIcon, GraphQlIcon],
  [
    NodejsIcon,
    FastApiIcon,
    LaravelIcon,
    RubyOnRailsIcon,
    GraphQlIcon,
    SeoIcon,
    SpringIcon,
    SymphonyIcon,
  ],
  [SqlIcon, PostgresqlIcon, NginxIcon, RedisIcon, RabbitMqIcon, KafkaIcon],
  [GitIcon, DockerIcon, KubernetesIcon, AwsIcon, AzureIcon, JenkinsIcon],
  [DebianIcon, UbuntuIcon],
];

interface SkillSetIconsProps {}

const SkillSetIcons = (props: SkillSetIconsProps) => {
  return (
    <div className="max-w-full lg:max-w-7xl m-auto flex flex-col gap-1">
      {icons.map((icons, index) => (
        <IconSet key={index} svgIcons={icons} />
      ))}
    </div>
  );
};

export default SkillSetIcons;
