/**
 * @fileoverview gRPC-Web generated client stub for analyzer
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_analyzer_pb from '../protos/analyzer_pb';


export class TrackAnalyzerServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoInitAnalyzer = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_analyzer_pb.InitResponse,
    (request: protos_analyzer_pb.InitRequest) => {
      return request.serializeBinary();
    },
    protos_analyzer_pb.InitResponse.deserializeBinary
  );

  initAnalyzer(
    request: protos_analyzer_pb.InitRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_analyzer_pb.InitResponse>;

  initAnalyzer(
    request: protos_analyzer_pb.InitRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_analyzer_pb.InitResponse) => void): grpcWeb.ClientReadableStream<protos_analyzer_pb.InitResponse>;

  initAnalyzer(
    request: protos_analyzer_pb.InitRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_analyzer_pb.InitResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/analyzer.TrackAnalyzerService/InitAnalyzer',
        request,
        metadata || {},
        this.methodInfoInitAnalyzer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/analyzer.TrackAnalyzerService/InitAnalyzer',
    request,
    metadata || {},
    this.methodInfoInitAnalyzer);
  }

  methodInfoAnalyzeStream = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_analyzer_pb.DataPoints,
    (request: protos_analyzer_pb.AudioData) => {
      return request.serializeBinary();
    },
    protos_analyzer_pb.DataPoints.deserializeBinary
  );

  analyzeStream(
    request: protos_analyzer_pb.AudioData,
    metadata?: grpcWeb.Metadata) {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/analyzer.TrackAnalyzerService/AnalyzeStream',
      request,
      metadata || {},
      this.methodInfoAnalyzeStream);
  }

}
