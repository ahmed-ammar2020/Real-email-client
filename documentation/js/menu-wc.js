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
                    <a href="index.html" data-type="index-link">emailclient documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-c0c8a0445a9c4504079db37f79982795"' : 'data-target="#xs-components-links-module-AppModule-c0c8a0445a9c4504079db37f79982795"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-c0c8a0445a9c4504079db37f79982795"' :
                                            'id="xs-components-links-module-AppModule-c0c8a0445a9c4504079db37f79982795"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-95df160aa2fe820e92a8deadf581bc1f"' : 'data-target="#xs-components-links-module-AuthModule-95df160aa2fe820e92a8deadf581bc1f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-95df160aa2fe820e92a8deadf581bc1f"' :
                                            'id="xs-components-links-module-AuthModule-95df160aa2fe820e92a8deadf581bc1f"' }>
                                            <li class="link">
                                                <a href="components/SigninComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SigninComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SignupComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRoutingModule.html" data-type="entity-link" >AuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InboxModule.html" data-type="entity-link" >InboxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InboxModule-39e334d04c322e6ecf87ffda1cd12d55"' : 'data-target="#xs-components-links-module-InboxModule-39e334d04c322e6ecf87ffda1cd12d55"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InboxModule-39e334d04c322e6ecf87ffda1cd12d55"' :
                                            'id="xs-components-links-module-InboxModule-39e334d04c322e6ecf87ffda1cd12d55"' }>
                                            <li class="link">
                                                <a href="components/EmailCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailIndexComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailIndexComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailReplyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailReplyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailShowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmailShowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InboxHomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InboxHomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotfoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotfoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlaceholderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlaceholderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InboxRoutingModule.html" data-type="entity-link" >InboxRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-7ade93b6906f798e3150df7b61a87fd8"' : 'data-target="#xs-components-links-module-SharedModule-7ade93b6906f798e3150df7b61a87fd8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-7ade93b6906f798e3150df7b61a87fd8"' :
                                            'id="xs-components-links-module-SharedModule-7ade93b6906f798e3150df7b61a87fd8"' }>
                                            <li class="link">
                                                <a href="components/InputComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InputComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link" >EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatchPassword.html" data-type="entity-link" >MatchPassword</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UniqueUsername.html" data-type="entity-link" >UniqueUsername</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AuthHttpInterceptor.html" data-type="entity-link" >AuthHttpInterceptor</a>
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
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/EmailResolverService.html" data-type="entity-link" >EmailResolverService</a>
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
                                <a href="interfaces/EmailResponse.html" data-type="entity-link" >EmailResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EmailsResponse.html" data-type="entity-link" >EmailsResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/signInResponse.html" data-type="entity-link" >signInResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/signUpResponse.html" data-type="entity-link" >signUpResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UniqueUsernameResponse.html" data-type="entity-link" >UniqueUsernameResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserSignin.html" data-type="entity-link" >UserSignin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserSignup.html" data-type="entity-link" >UserSignup</a>
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
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
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