#import <AdSupport/AdSupport.h>
#import <Cordova/CDV.h>

@interface IDFA : CDVPlugin

- (void)getAdInfo:(CDVInvokedUrlCommand*)command;

@end
