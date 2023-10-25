// response.interceptor.ts
import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from 'express';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();

    return next.handle().pipe(
      map(data => {
        if (data.success === false) {
          response.status(data.statusCode || 400).json({
            success: false,
            statusCode: data.statusCode,
            message: data.message.message || 'Request failed',
            ...(data.data && {data: data.data})
            //timestamp: new Date().toISOString(),
          });
        } else {
          response.status(data.statusCode || 200).json({
            success: true,
            message: data.message.message || 'Request successful',
            statusCode: data.statusCode,
            data: data.data,
            //timestamp: new Date().toISOString(),
          });
        }
      }),
    );
  }
}
