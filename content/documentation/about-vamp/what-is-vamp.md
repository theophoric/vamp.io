---
title: What is Vamp?
type: documentation
weight: 10
url: /documentation
aliases:
  - /what-is-vamp?
  - /documentation
menu:
  main:
    parent: about-vamp
---

# What is Vamp?

Vamp is an open source and self-hosted platform for managing (micro)service oriented architectures that rely on container technology. Vamp takes care of complex, multi-step actions like canary releases, route updates, metrics collection and service discovery.

Vamp is functionality agnostic, but functions well in an API centric, event driven and stateless environment. 
Vamp is not a strict container platform, but uses the power of container platforms under the hood.

Vamp is written in Scala, Go and ReactJS and comes with a server installation, a command line interface, a graphical UI and a RESTful API.

## Purpose of Vamp

* Provide a model for describing microservices and their dependencies in blueprints.
* Provide a runtime/execution engine for deploying these blueprints, similar to [AWS Cloudformation](http://aws.amazon.com/cloudformation/)
* Allow full A/B testing and [canary releasing](http://martinfowler.com/bliki/CanaryRelease.html) on all microservices.
* Allow "Big Data" type analysis- and prediction patterns on service behavior, performance and life-cycle.
* Provide clear SLA management and service level enforcement on services.

## Problem Definition

Developing applications using a microservices architecture has many benefits with regard to:

* speed of development & deployment
* separation of concerns
* scalability & resiliency

However, __using a microservices architecture raises complexity__: they have dozens of dependencies, each of which
will inevitably fail at some point. Furthermore, deployments and upgrades need coordination and orchestration. 
Security concerns multiply. Data feeds and monitoring/logs need to be aggregated and zipped together.
All of this has to be managed in such a way that users __get the benefit of microservices__, instead of only 
feeling the extra complexity and pain.

## Vision

1. Microservices as an architectural model will be the dominant model for all serious online companies.
2. Containers are going to be the next VM's: the common currency for compute power.
3. Managing complex microservices architectures brings completely new challenges.
4. Automatic deployment of containers is going to be a commodity: this is not our focus.
5. Basic health monitoring of containers is going to be a commodity: this is not our focus.

Please check our [quick start](/quick-start/) to get up to speed on how to use Vamp