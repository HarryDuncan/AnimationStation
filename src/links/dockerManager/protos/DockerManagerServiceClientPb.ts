/**
 * @fileoverview gRPC-Web generated client stub for dockerManager
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protos_dockerManager_pb from '../protos/dockerManager_pb';


export class DockerManagerAudioServiceClient {
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

  methodInfoCopyAudioFiles = new grpcWeb.AbstractClientBase.MethodInfo(
    protos_dockerManager_pb.CopyResponse,
    (request: protos_dockerManager_pb.CopyRequest) => {
      return request.serializeBinary();
    },
    protos_dockerManager_pb.CopyResponse.deserializeBinary
  );

  copyAudioFiles(
    request: protos_dockerManager_pb.CopyRequest,
    metadata: grpcWeb.Metadata | null): Promise<protos_dockerManager_pb.CopyResponse>;

  copyAudioFiles(
    request: protos_dockerManager_pb.CopyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protos_dockerManager_pb.CopyResponse) => void): grpcWeb.ClientReadableStream<protos_dockerManager_pb.CopyResponse>;

  copyAudioFiles(
    request: protos_dockerManager_pb.CopyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protos_dockerManager_pb.CopyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/dockerManager.DockerManagerAudioService/CopyAudioFiles',
        request,
        metadata || {},
        this.methodInfoCopyAudioFiles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/dockerManager.DockerManagerAudioService/CopyAudioFiles',
    request,
    metadata || {},
    this.methodInfoCopyAudioFiles);
  }

}
