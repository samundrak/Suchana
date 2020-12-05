'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">notification-service documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-737d8abcb57278ea9d0303fa68c31116"' : 'data-target="#xs-controllers-links-module-AppModule-737d8abcb57278ea9d0303fa68c31116"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-737d8abcb57278ea9d0303fa68c31116"' :
                                            'id="xs-controllers-links-module-AppModule-737d8abcb57278ea9d0303fa68c31116"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/NotificationsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-737d8abcb57278ea9d0303fa68c31116"' : 'data-target="#xs-injectables-links-module-AppModule-737d8abcb57278ea9d0303fa68c31116"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-737d8abcb57278ea9d0303fa68c31116"' :
                                        'id="xs-injectables-links-module-AppModule-737d8abcb57278ea9d0303fa68c31116"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppsModule.html" data-type="entity-link">AppsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppsModule-f8cf4ef21aa96f6260f6403adcf31575"' : 'data-target="#xs-controllers-links-module-AppsModule-f8cf4ef21aa96f6260f6403adcf31575"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppsModule-f8cf4ef21aa96f6260f6403adcf31575"' :
                                            'id="xs-controllers-links-module-AppsModule-f8cf4ef21aa96f6260f6403adcf31575"' }>
                                            <li class="link">
                                                <a href="controllers/AppsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppsModule-f8cf4ef21aa96f6260f6403adcf31575"' : 'data-target="#xs-injectables-links-module-AppsModule-f8cf4ef21aa96f6260f6403adcf31575"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppsModule-f8cf4ef21aa96f6260f6403adcf31575"' :
                                        'id="xs-injectables-links-module-AppsModule-f8cf4ef21aa96f6260f6403adcf31575"' }>
                                        <li class="link">
                                            <a href="injectables/AppsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AudienceModule.html" data-type="entity-link">AudienceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AudienceModule-38f5477373db87bc55cd4eea4a19b903"' : 'data-target="#xs-controllers-links-module-AudienceModule-38f5477373db87bc55cd4eea4a19b903"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AudienceModule-38f5477373db87bc55cd4eea4a19b903"' :
                                            'id="xs-controllers-links-module-AudienceModule-38f5477373db87bc55cd4eea4a19b903"' }>
                                            <li class="link">
                                                <a href="controllers/AudienceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AudienceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AudienceModule-38f5477373db87bc55cd4eea4a19b903"' : 'data-target="#xs-injectables-links-module-AudienceModule-38f5477373db87bc55cd4eea4a19b903"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AudienceModule-38f5477373db87bc55cd4eea4a19b903"' :
                                        'id="xs-injectables-links-module-AudienceModule-38f5477373db87bc55cd4eea4a19b903"' }>
                                        <li class="link">
                                            <a href="injectables/AudienceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AudienceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-a529476056cc2de09aea576f41a86adf"' : 'data-target="#xs-controllers-links-module-AuthModule-a529476056cc2de09aea576f41a86adf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a529476056cc2de09aea576f41a86adf"' :
                                            'id="xs-controllers-links-module-AuthModule-a529476056cc2de09aea576f41a86adf"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-a529476056cc2de09aea576f41a86adf"' : 'data-target="#xs-injectables-links-module-AuthModule-a529476056cc2de09aea576f41a86adf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a529476056cc2de09aea576f41a86adf"' :
                                        'id="xs-injectables-links-module-AuthModule-a529476056cc2de09aea576f41a86adf"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JWTStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JWTStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContactModesModule.html" data-type="entity-link">ContactModesModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link">DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationsModule.html" data-type="entity-link">NotificationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-NotificationsModule-0f718767ab1e9d32e99a0a2f3e4d34ad"' : 'data-target="#xs-controllers-links-module-NotificationsModule-0f718767ab1e9d32e99a0a2f3e4d34ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationsModule-0f718767ab1e9d32e99a0a2f3e4d34ad"' :
                                            'id="xs-controllers-links-module-NotificationsModule-0f718767ab1e9d32e99a0a2f3e4d34ad"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotificationsController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationTrackersModule.html" data-type="entity-link">NotificationTrackersModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link">UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-6d15bc1be732928eb91abfe842fae1ee"' : 'data-target="#xs-controllers-links-module-UsersModule-6d15bc1be732928eb91abfe842fae1ee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-6d15bc1be732928eb91abfe842fae1ee"' :
                                            'id="xs-controllers-links-module-UsersModule-6d15bc1be732928eb91abfe842fae1ee"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-6d15bc1be732928eb91abfe842fae1ee"' : 'data-target="#xs-injectables-links-module-UsersModule-6d15bc1be732928eb91abfe842fae1ee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-6d15bc1be732928eb91abfe842fae1ee"' :
                                        'id="xs-injectables-links-module-UsersModule-6d15bc1be732928eb91abfe842fae1ee"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/App.html" data-type="entity-link">App</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppRepository.html" data-type="entity-link">AppRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/Audience.html" data-type="entity-link">Audience</a>
                            </li>
                            <li class="link">
                                <a href="classes/AudienceRepository.html" data-type="entity-link">AudienceRepository</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthCredentialsDto.html" data-type="entity-link">AuthCredentialsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ContactModes.html" data-type="entity-link">ContactModes</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAppDto.html" data-type="entity-link">CreateAppDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateAudienceDto.html" data-type="entity-link">CreateAudienceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateNotificationDTO.html" data-type="entity-link">CreateNotificationDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link">CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notification.html" data-type="entity-link">Notification</a>
                            </li>
                            <li class="link">
                                <a href="classes/RecordChanges.html" data-type="entity-link">RecordChanges</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAppDto.html" data-type="entity-link">UpdateAppDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateAudienceDto.html" data-type="entity-link">UpdateAudienceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link">UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link">UserEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserRepository.html" data-type="entity-link">UserRepository</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/OnlyAppsGuard.html" data-type="entity-link">OnlyAppsGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IJWTPayload.html" data-type="entity-link">IJWTPayload</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});